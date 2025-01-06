package com.intro.moani.pages.main.service;

import com.intro.moani.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private MainMapper mainMapper;

    @Override
    public List<Map<String, Object>> getMenuList(Map<String, Object> requestMap) {
        List<Map<String, Object>> list = mainMapper.getMenuList(requestMap);

        return list;
    }
}
