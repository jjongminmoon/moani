package com.intro.mout.pages.main.service;

import com.intro.mout.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private MainMapper mainMapper;

    @Override
    public List<Map<String, Object>> getMainImage(@RequestBody Map<String, Object> requestMap) throws SQLException, Exception {
        List<Map<String, Object>> list = mainMapper.getMainImage(requestMap);

        return list;
    }
}
