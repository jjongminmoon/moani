package com.intro.moani.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Mapper
public interface MainMapper {

    List<Map<String, Object>> getMainImage() throws SQLException, Exception;
}
