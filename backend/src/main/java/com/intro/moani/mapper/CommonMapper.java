package com.intro.moani.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Mapper
public interface CommonMapper {

    List<Map<String, Object>> getMenuList(@RequestBody Map<String, Object> requestMap);
}
