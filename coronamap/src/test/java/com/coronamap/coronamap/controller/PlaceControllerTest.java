package com.coronamap.coronamap.controller;

import com.coronamap.coronamap.controller.dto.PlaceSaveRequestDto;
import com.coronamap.coronamap.controller.dto.PlaceSaveResponseDto;
import com.coronamap.coronamap.domain.Place;
import com.coronamap.coronamap.repository.PlaceRepository;
import com.coronamap.coronamap.service.PlaceService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.extension.Extension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlaceControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PlaceRepository placeRepository;

    @Test
    public void patient_Save() throws Exception{
        //given
        String restaurantName = "맛집";
        double coordinateX = 37.000;
        double coordinateY = 37.123;
        String phoneNumber = "01012345678";

        PlaceSaveRequestDto requestDto = PlaceSaveRequestDto.builder()
                .restaurantName(restaurantName)
                .coordinateX(coordinateX)
                .coordinateY(coordinateY)
                .phoneNumber(phoneNumber)
                .build();
        String url = "http://localhost:" + port + "/places";
        //when
        ResponseEntity<Object> responseEntity = restTemplate.postForEntity(url, requestDto, Object.class);
        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);

        List<Place> all = placeRepository.findAll();
        assertThat(all.get(0).getRestaurantName()).isEqualTo(restaurantName);
        assertThat(all.get(0).getPhoneNumber()).isEqualTo(phoneNumber);

    }
}