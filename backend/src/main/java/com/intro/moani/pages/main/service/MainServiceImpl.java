package com.intro.moani.pages.main.service;

import com.intro.moani.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private MainMapper mainMapper;

    @Override
    public List<Map<String, Object>> getMainImage() throws SQLException, Exception {
        List<Map<String, Object>> list = mainMapper.getMainImage();

        return list;
    }
}
