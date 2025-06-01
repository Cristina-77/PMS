if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/Alexia/.gradle/caches/8.13/transforms/d9ea4cddfe83ff96f0f2c06f10d2f91f/transformed/hermes-android-0.79.0-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Alexia/.gradle/caches/8.13/transforms/d9ea4cddfe83ff96f0f2c06f10d2f91f/transformed/hermes-android-0.79.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

