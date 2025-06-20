package com.bookstore.jdbcTemplate;

import com.bookstore.jdbcTemplate.dto.AuthorDto;
import com.bookstore.jdbcTemplate.dto.BookDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Transactional(readOnly = true)
public class AuthorExtractor {
    private final JdbcTemplate jdbcTemplate;

    public AuthorExtractor(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<AuthorDto> extract() {
        String sql = "SELECT a.id, a.name, a.genre, b.id AS bookId, b.title "
                + "FROM author a INNER JOIN book b ON a.id = b.author_id";

        List<AuthorDto> result = jdbcTemplate.query(sql, (ResultSet rs) -> {
            final Map<Long, AuthorDto> authorsMap = new HashMap<>();
            while (rs.next()) {
                Long authorId = rs.getLong("id");
                AuthorDto author = authorsMap.get(authorId);
                if (author == null) {
                    author = AuthorDto.createAuthorDto(rs.getLong("id"),
                            rs.getString("name"),
                            rs.getString("genre"));
                }

                BookDto book = BookDto.createBookDto(rs.getLong("bookId"),
                        rs.getString("title"));

                author.addBook(book);
                authorsMap.putIfAbsent(author.getId(), author);
            }

            return new ArrayList<>(authorsMap.values());
        });

        return result;
    }
}
