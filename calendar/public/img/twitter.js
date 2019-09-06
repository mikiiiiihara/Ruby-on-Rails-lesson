// [#acdn-button]にクリックイベントを設定する
$( '#acdn-button' ).click( function()
{
	// [#acdn-target]に[slideToggle()]を実行する
	$( '#acdn-target' ).slideToggle() ;

} ) ;

$(document ).ready( function(){
  $(".mobile_twitter").on("click", function(){
    $(".acdn-content").toggleClass("open");
  } ) ;
} ) ;
