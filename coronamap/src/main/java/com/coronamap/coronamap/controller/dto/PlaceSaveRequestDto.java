package com.coronamap.coronamap.controller.dto;

import com.coronamap.coronamap.domain.Place;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class PlaceSaveRequestDto {

    private String placeName;
    private String addressName;
    private double coordinateX;
    private double coordinateY;
    private String phoneNumber;
    private LocalDate date;

    @Builder
    public PlaceSaveRequestDto(String placeName, String addressName, double coordinateX, double coordinateY, String phoneNumber, LocalDate date) {
        this.placeName = placeName;
        this.addressName = addressName;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }

    public Place toEntity() {
        return Place.builder()
                .placeName(placeName)
                .addressName(addressName)
                .coordinateX(coordinateX)
                .coordinateY(coordinateY)
                .phoneNumber(phoneNumber)
                .date(date)
                .build();
    }
}
