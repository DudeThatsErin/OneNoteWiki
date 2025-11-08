'use client';

export function initializeCopyButtons() {
  if (typeof window === 'undefined') return;

  // Clean up any existing copy buttons first
  const existingButtons = document.querySelectorAll('.copy-code-btn');
  existingButtons.forEach(button => button.remove());

  // Function to copy text to clipboard
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy text:', err);
      return false;
    }
  };

  // Function to create copy button
  const createCopyButton = (codeElement: HTMLElement): HTMLButtonElement => {
    const button = document.createElement('button');
    button.className = 'absolute p-1.5 bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-200 hover:text-white rounded-md transition-colors opacity-0';
    button.style.top = '8px';
    button.style.right = '8px';
    button.style.zIndex = '20';
    button.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>
    `;
    button.title = 'Copy code';

    button.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const text = codeElement.textContent || '';
      const success = await copyToClipboard(text);
      
      if (success) {
        // Show success state
        button.innerHTML = `
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        `;
        button.className = button.className.replace('bg-gray-700 hover:bg-gray-600', 'bg-green-600 hover:bg-green-700');
        
        // Reset after 2 seconds
        setTimeout(() => {
          button.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          `;
          button.className = button.className.replace('bg-green-600 hover:bg-green-700', 'bg-gray-700 hover:bg-gray-600');
        }, 2000);
      }
    });

    return button;
  };

  // Function to add copy button to code elements
  const addCopyButtonToCode = (codeElement: HTMLElement) => {
    const parent = codeElement.parentElement;
    if (!parent) return;

    // Skip if parent already has copy button or content is very short
    if (parent.querySelector('.copy-code-btn') || (codeElement.textContent?.length || 0) < 10) {
      return;
    }

    // Skip inline code elements (those with padding classes that indicate inline usage)
    const classList = codeElement.className;
    if (classList.includes('px-2') || classList.includes('py-1')) {
      return;
    }

    // For pre elements, check if they're in a code block container
    if (codeElement.tagName === 'PRE' && !parent.classList.contains('group')) {
      return;
    }

    // Ensure parent has relative positioning for absolute button positioning
    parent.style.position = 'relative';

    // Add group class for hover effect
    if (!parent.classList.contains('group')) {
      parent.classList.add('group');
    }

    const copyButton = createCopyButton(codeElement);
    parent.appendChild(copyButton);

    // Add hover functionality
    parent.addEventListener('mouseenter', () => {
      copyButton.style.opacity = '1';
    });
    
    parent.addEventListener('mouseleave', () => {
      copyButton.style.opacity = '0';
    });
  };

  // Function to process all code elements
  const processCodeElements = () => {
    // Target code elements that are likely to be code blocks (not inline)
    // First process pre elements in group containers
    const preElements = document.querySelectorAll('.group pre');
    preElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        addCopyButtonToCode(element);
      }
    });

    // Then process code elements in pre tags
    const codeElements = document.querySelectorAll('pre code, .bg-gray-800 code, .bg-gray-950 code');
    codeElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        addCopyButtonToCode(element);
      }
    });
  };

  // Initial processing
  processCodeElements();

  // Set up mutation observer to handle dynamically added content
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'CODE' || element.querySelector('code')) {
              shouldProcess = true;
            }
          }
        });
      }
    });

    if (shouldProcess) {
      // Debounce processing
      setTimeout(processCodeElements, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Cleanup function
  return () => {
    observer.disconnect();
  };
}
