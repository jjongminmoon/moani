package com.intro.moani;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.intro.moani.mapper")
public class MoaniApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoaniApplication.class, args);
	}

}
