package com.coronamap.coronamap.controller.dto;

import lombok.Getter;

@Getter
public class PlaceSaveResponseDto{
    private Long id;

    public PlaceSaveResponseDto(Long id) {
        this.id = id;
    }
}
