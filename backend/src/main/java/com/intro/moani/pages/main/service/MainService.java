package com.intro.moani.pages.main.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface MainService {

    List<Map<String, Object>> getMainImage() throws SQLException, Exception;
}
