package com.bookstore;

import com.bookstore.service.BookstoreService;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SearchViaSpecificationsApplication {

    private final BookstoreService bookstoreService;

    public SearchViaSpecificationsApplication(BookstoreService bookstoreService) {
        this.bookstoreService = bookstoreService;
    }

    public static void main(String[] args) {
        SpringApplication.run(SearchViaSpecificationsApplication.class, args);
    }

    @Bean
    public ApplicationRunner init() {
        return args -> {
            System.out.println("\nCall fetchAuthors():");
            bookstoreService.fetchAuthors();

            System.out.println("\nCall fetchBooksPage():");
            bookstoreService.fetchBooksPage(0, 2);
        };
    }
}
