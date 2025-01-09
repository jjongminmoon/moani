package com.intro.moani.pages.common.service;

import com.intro.moani.mapper.CommonMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Service
public class CommonServiceImpl implements CommonService {

    @Autowired
    private CommonMapper commonMapper;

    @Override
    public List<Map<String, Object>> getMenuList(@RequestBody Map<String, Object> requestMap) {
        List<Map<String, Object>> list = commonMapper.getMenuList(requestMap);

        return list;
    }
}
