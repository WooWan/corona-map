package com.coronamap.coronamap.controller;

import com.coronamap.coronamap.controller.dto.PlaceDto;
import com.coronamap.coronamap.controller.dto.PlaceSaveRequestDto;
import com.coronamap.coronamap.controller.dto.PlaceSaveResponseDto;
import com.coronamap.coronamap.domain.Place;
import com.coronamap.coronamap.service.PlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PlaceController {

    private final PlaceService placeService;

    @PostMapping("/places")
    public PlaceSaveResponseDto savePlace(@RequestBody PlaceSaveRequestDto requestDto) {
        Long placeId = placeService.save(requestDto);
        log.info("placeId :{}", placeId);
        return new PlaceSaveResponseDto(placeId);
    }

    @GetMapping("/places")
    public List<PlaceDto> places() {
        List<Place> findPlaces = placeService.findPlaces();
        List<PlaceDto> collect = findPlaces.stream()
                .map(place -> new PlaceDto(place))
                .collect(Collectors.toList());
        log.info("collect :{}", collect);
        return collect;
    }

    @DeleteMapping("/places/{id}")
    public void deletePatient(@PathVariable Long id) {
        placeService.deletePatient(id);
    }
//    @PutMapping("/places/{id}")
//    public UpdatePlaceResponse updatePlace(@PathVariable Long id, @RequestBody ){
//
//    }
}
