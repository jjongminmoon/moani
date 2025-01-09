package com.intro.moani.pages.common.service;

import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface CommonService {

    List<Map<String, Object>> getMenuList(@RequestBody Map<String, Object> requestMap) throws SQLException, Exception;
}
