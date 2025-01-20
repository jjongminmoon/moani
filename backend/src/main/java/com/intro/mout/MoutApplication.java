package com.intro.mout;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.intro.mout.mapper")
public class MoutApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoutApplication.class, args);
	}

}
