package com.coronamap.coronamap.controller;

import com.coronamap.coronamap.controller.dto.PlaceSaveRequestDto;
import com.coronamap.coronamap.domain.Place;
import com.coronamap.coronamap.repository.PlaceRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


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
        String placeName = "맛집";
        String addressName = "성동구 가산자로 202";
        String restaurantName = "맛집";
        double coordinateX = 37.000;
        double coordinateY = 37.123;
        String phoneNumber = "01012345678";

        PlaceSaveRequestDto requestDto = PlaceSaveRequestDto.builder()
                .placeName(placeName)
                .addressName(addressName)
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
        assertThat(all.get(0).getPlaceName()).isEqualTo(placeName);
        assertThat(all.get(0).getPhoneNumber()).isEqualTo(phoneNumber);

    }
}