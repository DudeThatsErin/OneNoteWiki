import Link from 'next/link';
import { ArrowLeft, ArrowRight, Server, Globe, Database, Shield } from 'lucide-react';

const javaFrameworks = [
  {
    name: 'Spring Framework',
    category: 'Enterprise Framework',
    description: 'Comprehensive framework for enterprise Java development with dependency injection',
    pros: ['Dependency Injection', 'AOP Support', 'Extensive ecosystem', 'Great documentation'],
    cons: ['Learning curve', 'Configuration complexity', 'Can be heavyweight'],
    useCases: ['Enterprise applications', 'Web services', 'Microservices', 'REST APIs'],
    companies: ['Netflix', 'Airbnb', 'Yatra', 'Wix'],
    icon: '🍃'
  },
  {
    name: 'Spring Boot',
    category: 'Microframework',
    description: 'Opinionated framework that simplifies Spring application development',
    pros: ['Auto-configuration', 'Embedded servers', 'Production-ready', 'Minimal setup'],
    cons: ['Less control', 'Can hide complexity', 'Opinionated choices'],
    useCases: ['Microservices', 'REST APIs', 'Rapid prototyping', 'Cloud applications'],
    companies: ['Uber', 'Netflix', 'Airbnb', 'Trivago'],
    icon: '🚀'
  },
  {
    name: 'Hibernate',
    category: 'ORM Framework',
    description: 'Object-relational mapping framework for database operations',
    pros: ['Database abstraction', 'HQL queries', 'Caching', 'Transaction management'],
    cons: ['Performance overhead', 'Complex for simple queries', 'Learning curve'],
    useCases: ['Database operations', 'Enterprise applications', 'Data persistence'],
    companies: ['Red Hat', 'JBoss', 'Many enterprise apps'],
    icon: '🗃️'
  },
  {
    name: 'Apache Struts',
    category: 'Web Framework',
    description: 'MVC framework for creating enterprise-ready Java web applications',
    pros: ['MVC architecture', 'Tag libraries', 'Validation framework', 'Mature'],
    cons: ['Declining popularity', 'Security issues', 'Complex configuration'],
    useCases: ['Web applications', 'Enterprise portals', 'Legacy systems'],
    companies: ['Legacy enterprise applications'],
    icon: '🌐'
  }
];

export default function JavaFrameworksPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/java/oop"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: OOP Concepts</span>
        </Link>
        <Link
          href="/languages/java"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to Java</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🛠️</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Java Frameworks & Libraries</h1>
            <p className="text-gray-600 dark:text-gray-300">Popular tools that accelerate Java development</p>
          </div>
        </div>
      </div>

      {/* Framework Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Java Frameworks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {javaFrameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{framework.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{framework.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{framework.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">Pros:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.pros.map((pro, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        {pro}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm mb-1">Cons:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.cons.map((con, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">
                        {con}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm mb-1">Used by:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.companies.map((company, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spring Boot Deep Dive */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Spring Boot Deep Dive</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Creating a REST API with Spring Boot</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// pom.xml dependencies
/*
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
*/

// Main Application Class
@SpringBootApplication
public class BookstoreApplication {
    public static void main(String[] args) {
        SpringApplication.run(BookstoreApplication.class, args);
    }
}

// Entity Class
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false)
    private String author;
    
    @Column(nullable = false)
    private Double price;
    
    @Column(name = "publication_year")
    private Integer publicationYear;
    
    // Default constructor
    public Book() {}
    
    // Constructor
    public Book(String title, String author, Double price, Integer publicationYear) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.publicationYear = publicationYear;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    
    public Integer getPublicationYear() { return publicationYear; }
    public void setPublicationYear(Integer publicationYear) { 
        this.publicationYear = publicationYear; 
    }
}

// Repository Interface
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthor(String author);
    List<Book> findByTitleContainingIgnoreCase(String title);
    List<Book> findByPriceBetween(Double minPrice, Double maxPrice);
    
    @Query("SELECT b FROM Book b WHERE b.publicationYear >= :year")
    List<Book> findBooksPublishedAfter(@Param("year") Integer year);
}

// Service Class
@Service
@Transactional
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;
    
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }
    
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
    
    public Book updateBook(Long id, Book bookDetails) {
        Book book = bookRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        
        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setPrice(bookDetails.getPrice());
        book.setPublicationYear(bookDetails.getPublicationYear());
        
        return bookRepository.save(book);
    }
    
    public void deleteBook(Long id) {
        Book book = bookRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        bookRepository.delete(book);
    }
    
    public List<Book> searchBooksByAuthor(String author) {
        return bookRepository.findByAuthor(author);
    }
    
    public List<Book> searchBooksByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }
}

// REST Controller
@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*")
public class BookController {
    
    @Autowired
    private BookService bookService;
    
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Optional<Book> book = bookService.getBookById(id);
        return book.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Book> createBook(@Valid @RequestBody Book book) {
        Book savedBook = bookService.saveBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, 
                                         @Valid @RequestBody Book bookDetails) {
        try {
            Book updatedBook = bookService.updateBook(id, bookDetails);
            return ResponseEntity.ok(updatedBook);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        try {
            bookService.deleteBook(id);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBooks(
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String title) {
        
        List<Book> books;
        if (author != null) {
            books = bookService.searchBooksByAuthor(author);
        } else if (title != null) {
            books = bookService.searchBooksByTitle(title);
        } else {
            books = bookService.getAllBooks();
        }
        
        return ResponseEntity.ok(books);
    }
}

// Custom Exception
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}`}
          </pre>
        </div>
      </section>

      {/* Hibernate Deep Dive */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Hibernate ORM</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Advanced Hibernate Features</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// hibernate.cfg.xml configuration
/*
<?xml version="1.0" encoding="UTF-8"?>
<hibernate-configuration>
    <session-factory>
        <property name="hibernate.connection.driver_class">org.h2.Driver</property>
        <property name="hibernate.connection.url">jdbc:h2:mem:testdb</property>
        <property name="hibernate.connection.username">sa</property>
        <property name="hibernate.connection.password"></property>
        <property name="hibernate.dialect">org.hibernate.dialect.H2Dialect</property>
        <property name="hibernate.hbm2ddl.auto">create-drop</property>
        <property name="hibernate.show_sql">true</property>
        <property name="hibernate.format_sql">true</property>
    </session-factory>
</hibernate-configuration>
*/

// Advanced Entity with Relationships
@Entity
@Table(name = "authors")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(unique = true)
    private String email;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "birth_date")
    private Date birthDate;
    
    // One-to-Many relationship
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Book> books = new HashSet<>();
    
    // Many-to-Many relationship
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "author_genre",
        joinColumns = @JoinColumn(name = "author_id"),
        inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres = new HashSet<>();
    
    // Constructors, getters, and setters...
}

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false)
    private BigDecimal price;
    
    @Column(name = "publication_date")
    @Temporal(TemporalType.DATE)
    private Date publicationDate;
    
    // Many-to-One relationship
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;
    
    // Many-to-One relationship
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;
    
    // One-to-Many relationship
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();
    
    // Constructors, getters, and setters...
}

// DAO Pattern with Hibernate
@Repository
public class BookDAOImpl implements BookDAO {
    
    @Autowired
    private SessionFactory sessionFactory;
    
    private Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<Book> findAll() {
        Session session = getCurrentSession();
        Query<Book> query = session.createQuery("FROM Book b LEFT JOIN FETCH b.author", Book.class);
        return query.getResultList();
    }
    
    @Override
    @Transactional(readOnly = true)
    public Book findById(Long id) {
        Session session = getCurrentSession();
        return session.get(Book.class, id);
    }
    
    @Override
    @Transactional
    public Book save(Book book) {
        Session session = getCurrentSession();
        session.saveOrUpdate(book);
        return book;
    }
    
    @Override
    @Transactional
    public void delete(Long id) {
        Session session = getCurrentSession();
        Book book = session.get(Book.class, id);
        if (book != null) {
            session.delete(book);
        }
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<Book> findByAuthor(String authorName) {
        Session session = getCurrentSession();
        Query<Book> query = session.createQuery(
            "FROM Book b JOIN FETCH b.author a WHERE " +
            "LOWER(CONCAT(a.firstName, ' ', a.lastName)) LIKE LOWER(:authorName)", 
            Book.class
        );
        query.setParameter("authorName", "%" + authorName + "%");
        return query.getResultList();
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<Book> findBooksWithReviews() {
        Session session = getCurrentSession();
        Query<Book> query = session.createQuery(
            "SELECT DISTINCT b FROM Book b LEFT JOIN FETCH b.reviews r " +
            "LEFT JOIN FETCH b.author WHERE SIZE(b.reviews) > 0", 
            Book.class
        );
        return query.getResultList();
    }
    
    // Named query example
    @Override
    @Transactional(readOnly = true)
    public List<Book> findExpensiveBooks(BigDecimal minPrice) {
        Session session = getCurrentSession();
        Query<Book> query = session.createNamedQuery("Book.findExpensive", Book.class);
        query.setParameter("minPrice", minPrice);
        return query.getResultList();
    }
    
    // Criteria API example
    @Override
    @Transactional(readOnly = true)
    public List<Book> findBooksByCriteria(String title, String authorName, BigDecimal maxPrice) {
        Session session = getCurrentSession();
        CriteriaBuilder cb = session.getCriteriaBuilder();
        CriteriaQuery<Book> cq = cb.createQuery(Book.class);
        Root<Book> book = cq.from(Book.class);
        Join<Book, Author> author = book.join("author");
        
        List<Predicate> predicates = new ArrayList<>();
        
        if (title != null && !title.isEmpty()) {
            predicates.add(cb.like(cb.lower(book.get("title")), 
                                 "%" + title.toLowerCase() + "%"));
        }
        
        if (authorName != null && !authorName.isEmpty()) {
            predicates.add(cb.like(
                cb.lower(cb.concat(cb.concat(author.get("firstName"), " "), 
                                 author.get("lastName"))), 
                "%" + authorName.toLowerCase() + "%"));
        }
        
        if (maxPrice != null) {
            predicates.add(cb.lessThanOrEqualTo(book.get("price"), maxPrice));
        }
        
        cq.where(predicates.toArray(new Predicate[0]));
        cq.orderBy(cb.asc(book.get("title")));
        
        return session.createQuery(cq).getResultList();
    }
}

// Service layer with caching
@Service
@Transactional
public class BookService {
    
    @Autowired
    private BookDAO bookDAO;
    
    @Cacheable("books")
    @Transactional(readOnly = true)
    public List<Book> getAllBooks() {
        return bookDAO.findAll();
    }
    
    @Cacheable(value = "book", key = "#id")
    @Transactional(readOnly = true)
    public Book getBookById(Long id) {
        return bookDAO.findById(id);
    }
    
    @CacheEvict(value = {"books", "book"}, allEntries = true)
    public Book saveBook(Book book) {
        return bookDAO.save(book);
    }
    
    @CacheEvict(value = {"books", "book"}, key = "#id")
    public void deleteBook(Long id) {
        bookDAO.delete(id);
    }
}`}
          </pre>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Framework Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Framework</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Learning Curve</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Best For</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Market Demand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Spring Boot</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Microservices, REST APIs</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Very High</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Spring Framework</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Steep</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Enterprise applications</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Hibernate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Good</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Database operations</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">High</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Apache Struts</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Good</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Legacy web apps</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Java Framework Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Do</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Use dependency injection properly</li>
              <li>• Follow MVC architecture patterns</li>
              <li>• Implement proper exception handling</li>
              <li>• Use transactions appropriately</li>
              <li>• Write unit and integration tests</li>
              <li>• Follow RESTful API conventions</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Don't</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
              <li>• Over-engineer simple applications</li>
              <li>• Ignore security best practices</li>
              <li>• Use deprecated framework features</li>
              <li>• Mix business logic with presentation</li>
              <li>• Forget to handle database connections</li>
              <li>• Skip performance optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/java/oop"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: OOP Concepts</span>
        </Link>
        <Link
          href="/languages/java"
          className="flex items-center space-x-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to Java</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
