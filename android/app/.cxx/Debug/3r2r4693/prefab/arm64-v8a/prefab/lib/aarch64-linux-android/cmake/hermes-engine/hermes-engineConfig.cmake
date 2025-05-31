if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/bogdy/.gradle/caches/8.13/transforms/6a38a6ef61ba1ac771eb4b23bb151470/transformed/hermes-android-0.79.0-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/bogdy/.gradle/caches/8.13/transforms/6a38a6ef61ba1ac771eb4b23bb151470/transformed/hermes-android-0.79.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

