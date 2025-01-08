package com.intro.moani.pages.common.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface CommonService {

    List<Map<String, Object>> getMenuList(Map<String, Object> requestMap) throws SQLException, Exception;
}
