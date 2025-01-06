package com.intro.moani;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/hello")
    public List<String> hello() {
        return Arrays.asList("리액트", "hello");
    }
}
