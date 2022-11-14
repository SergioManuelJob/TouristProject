package com.example.backend.entity.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface IFileService {

    String uploadImage(String path, MultipartFile file) throws IOException;

}
