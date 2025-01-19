package com.intro.moani.pages.main.service;

import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface MainService {

    List<Map<String, Object>> getMainImage(@RequestBody Map<String, Object> requestMap) throws SQLException, Exception;
}
