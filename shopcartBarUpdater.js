$(function(){
    $.ajax({
        url: '/shopcart/getShopcartBar/',
        type: 'POST',
        dataType: 'json',
        success: function(data){
            if(data.res === true)
                $('.shopcartBar').html(data.content);
            else
                alert('РџСЂРѕРёР·РѕС€Р»Р° РѕС€РёР±РєР° РїСЂРё РїРѕРїС‹С‚РєРµ РІС‹РІРµСЃС‚Рё РєРѕСЂР·РёРЅСѓ СЃ С‚РѕРІР°СЂР°РјРё. РћР±СЂР°С‚РёС‚РµСЃСЊ Рє РІР»Р°РґРµР»СЊС†Р°Рј СЃР°Р№С‚Р° РїРѕ СЌР». РїРѕС‡С‚Рµ.');
        }
    });
});
