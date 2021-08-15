package com.coronamap.coronamap.service;

import com.coronamap.coronamap.controller.dto.PlaceSaveRequestDto;
import com.coronamap.coronamap.domain.Place;
import com.coronamap.coronamap.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PlaceService {

    private final PlaceRepository placeRepository;

    @Transactional(readOnly = true)
    public List<Place> findPlaces() {
        return placeRepository.findAll();
    }

    @Transactional
    public Long save(PlaceSaveRequestDto requestDto) {
        return placeRepository.save(requestDto.toEntity()).getId();
    }


}
