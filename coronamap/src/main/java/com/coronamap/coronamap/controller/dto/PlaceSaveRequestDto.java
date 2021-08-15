package com.coronamap.coronamap.controller.dto;

import com.coronamap.coronamap.domain.Place;
import lombok.Builder;
import lombok.Getter;

@Getter
public class PlaceSaveRequestDto {

    private String restaurantName;
    private double coordinateX;
    private double coordinateY;
    private String phoneNumber;

    @Builder
    public PlaceSaveRequestDto(String restaurantName, double coordinateX, double coordinateY, String phoneNumber) {
        this.restaurantName = restaurantName;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.phoneNumber = phoneNumber;
    }

    public Place toEntity() {
        return Place.builder()
                .restaurantName(restaurantName)
                .coordinateX(coordinateX)
                .coordinateY(coordinateY)
                .phoneNumber(phoneNumber)
                .build();

    }
}
