<!DOCTYPE html>
<html lang="en">
<head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="wrapper">
        <div id="sliderContainer">
            <div class="tick-slider">
                <div class="tick-slider-header">
                    <h5><label for="upCountrySlider">W trasie</label></h5>
                    <h5>km/month</h5>
                </div>
                <div class="tick-slider-value-container">
                    <div id="upCountryLabelMin" class="tick-slider-label">0</div>
                    <div id="upCountryLabelMax" class="tick-slider-label">10000</div>
                   
                </div>
                    <div class="tick-slider-background"></div>
                    <div id="upCountryProgress" class="tick-slider-progress"></div>
                    <div id="upCountryTicks" class="tick-slider-tick-container"></div>
                    <input
                        id="upCountrySlider"
                        class="tick-slider-input"
                        type="range"
                        min="0"
                        max="10000"
                        step="1"
                        value="5000"
                        onimput="onSliderInput(event)"
                    />
            </div>
            <div id="upCountryValue" class="tick-slider-value">jestem wartością</div>
            <div class="tick-slider">
                <div class="tick-slider-header">
                    <h5><label for="citySlider">W mieście</label></h5>
                    <h5>km/month</h5>
                </div>
                <div class="tick-slider-value-container">
                    <div id="cityLabelMin" class="tick-slider-label">0</div>
                    <div id="cityLabelMax" class="tick-slider-label">10000</div>

                </div>
                <div class="tick-slider-background"></div>
                <div id="cityProgress" class="tick-slider-progress"></div>
                <!-- <div id="cityTicks" class="tick-slider-tick-container"></div> -->
                <input
                    id="citySlider"
                    class="tick-slider-input"
                    type="range"
                    min="0"
                    max="10000"
                    step="1"
                    value="5000"
                    onimput="onSliderInput(event)"
                />
            </div>
            <div id="cityValue" class="tick-slider-value">jestem wartością</div>
              <!-- Car divs -->
            <div id="petrolCombustion" class="combustion-output" >
                Spalinowy spala:
            </div>
            <div id="hybridCombustion" class="combustion-output">
                Hybrydowy spala:
            </div>
            <div id="optimumCombustion" class="combustion-output">
                Lepszy jest:
            </div>
             <!-- Car divs end -->
        </div>
    </div>   
    <script src="script.js">
    </script>
</body>
</html>
