jQuery(document).ready(function ($) {
        
        $('.emoji:eq(0)').css('transform', 'translate(40px,20px) scale(5,5)')
        $('.emoji:eq(1)').css('transform', 'translate(60px,10px) scale(5,5)')
        $('.emoji:eq(2)').css('transform', 'translate(80px,20px) scale(5,5)')
        $('.emoji:eq(3)').css('transform', 'translate(100px,10px) scale(5,5)')
        
        var _SlideshowTransitions = [
        {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$JssorEasing$.$EaseInCubic,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}
        ];
        var options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                }
        };
        var bcn_slider = new $JssorSlider$('slider_container', options);
    });

