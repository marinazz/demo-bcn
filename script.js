jQuery(document).ready(function ($) {
        
        $('.emoji:eq(0)').css('transform', 'translate(400px,200px) scale(5,5)')
        $('.emoji:eq(1)').css('transform', 'translate(600px,100px) scale(5,5)')
        $('.emoji:eq(2)').css('transform', 'translate(800px,200px) scale(5,5)')
        $('.emoji:eq(3)').css('transform', 'translate(1000px,100px) scale(5,5)')
        
        setTimeout(()=>{
        $('.emoji:eq(0)').css('transform', 'translate(200px,600px) scale(5,5)')
        $('.emoji:eq(1)').css('transform', 'translate(400px,400px) scale(5,5)')
        $('.emoji:eq(2)').css('transform', 'translate(600px,600px) scale(5,5)')
        $('.emoji:eq(3)').css('transform', 'translate(800px,400px) scale(5,5)')
        }, 2000)
        
        setTimeout(()=>{
        $('.emoji:eq(0)').css('transform', '')
        $('.emoji:eq(1)').css('transform', '')
        $('.emoji:eq(2)').css('transform', '')
        $('.emoji:eq(3)').css('transform', '')
        }, 4000)
        
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

