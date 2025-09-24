# Historie Images Mapping

This document maps the image references used in the historie.js data files to the actual image files in the `assets/images/historie/` directory.

## Image Mapping Reference

| Section | Image Reference | Actual File | Description |
|---------|-----------------|-------------|-------------|
| **Hrabůvka 1936-1959** |
| | image1.jpeg | assets/images/historie/image1.jpeg | Bývalý hangár v Hrabůvce |
| | image2.jpeg | assets/images/historie/image2.jpeg | Restaurace Dakota, dříve využívaná jako provozní budova ČSA |
| **GONIO** |
| | image3.jpeg | assets/images/historie/image3.jpeg | Historické fotografie goniometrické stanice |
| | image4.jpeg | assets/images/historie/image4.jpeg | Technické vybavení GONIO |
| **Mošnov 1959-1969** |
| | image5.jpeg | assets/images/historie/image5.jpeg | Vojenská TWR, bílá věž |
| | image6.jpeg | assets/images/historie/image6.jpeg | Stanoviště APP, Książek a Janaček |
| | image7.jpeg | assets/images/historie/image7.jpeg | Interiér odletové haly v sedmdesátých letech, kdy létání bylo luxus |
| **Období 1968-1989** |
| | image8.jpeg | assets/images/historie/image8.jpeg | Rudolf Kachel, APP na staré věži |
| | image9.jpeg | assets/images/historie/image9.jpeg | An 225 Mrija - Největší dopravní letadlo na světě |
| **Období 1990-1999** |
| | image10.jpeg | assets/images/historie/image10.jpeg | Nová budova TWR/APP nad hasičárnou |
| | image11.jpeg | assets/images/historie/image11.jpeg | 90. léta, odbavovací hala APN central, letadla Air Ostrava |
| **Období 2000-2009** |
| | image12.jpeg | assets/images/historie/image12.jpeg | Briefing/ARO |
| | image13.jpeg | assets/images/historie/image13.jpeg | Simulátor APP |
| | image14.jpeg | assets/images/historie/image14.jpeg | 1. ročník dnů NATO na letišti Mošnov |
| **Období 2010-2019** |
| | image15.jpeg | assets/images/historie/image15.jpeg | Marcel Poledník řídí první lety na SNS |
| | image16.jpeg | assets/images/historie/image16.jpeg | Staví se nám nová věž - A je hotovo |
| | image17.jpeg | assets/images/historie/image17.jpeg | Nová TWR |
| **Období 2020-2026** |
| | image18.png | assets/images/historie/image18.png | Pohled z věže na APN jih |
| | image19.png | assets/images/historie/image19.png | Pohled na APN central a jih, vlakové nádraží |
| | image20.png | assets/images/historie/image20.png | Výstavba letištního cargoterminálu |

## File Format Notes

- Images 1-17 are JPEG format (.jpeg extension)
- Images 18-20 are PNG format (.png extension)
- Images 21+ continue as JPEG format

## Original HTML Image References

Some images in the original HTML had specific filenames that have been mapped to the numbered system:

- `hrabuvka_hangar.jpg` → `image1.jpeg`
- `dakota_restaurant.jpg` → `image2.jpeg`
- `gonio_station.jpg` → `image3.jpeg`
- `gonio_equipment.jpg` → `image4.jpeg`
- `mosnov_early_terminal.jpg` → `image5.jpeg`
- `mosnov_app_control.jpg` → `image6.jpeg`
- `mosnov_interior_luxury.jpg` → `image7.jpeg`
- `Kachel.jpg` → `image8.jpeg`
- `renamed/slide10_ruzne.jpeg` → `image9.jpeg`
- `new_twr_building.jpg` → `image10.jpeg`
- `renamed/slide10_ruzne.jpeg` → `image11.jpeg`
- `briefingsv.JPG` → `image12.jpeg`
- `appsv.jpg` → `image13.jpeg`
- `renamed/slide10_ruzne.jpeg` → `image14.jpeg`
- `Plánička.jpg` → `image15.jpeg`
- `new_tower_construction.jpg` → `image16.jpeg`
- `new_twr_interior.jpg` → `image17.jpeg`
- `apn_south_view.jpg` → `image18.png`
- `overall_airport_view.jpg` → `image19.png`
- `cargo_terminal_construction.jpg` → `image20.png`

## Usage in JavaScript

All images are referenced in the data files using the format:
```javascript
{
  src: 'assets/images/historie/image{number}.{extension}',
  alt: 'Alt text description',
  caption: 'Caption text'
}
```

## Directory Structure

```
assets/images/historie/
├── image1.jpeg
├── image2.jpeg
├── image3.jpeg
├── ...
├── image18.png
├── image19.png
├── image20.png
└── (continues with more images)
```