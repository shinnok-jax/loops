function drawTree (a ) {
	for ( var i = 1; i <= a; i++) {
    var star= "";
    for ( var j = 0; j < i; j++) {
      star += '*';
    }
    console.log(star);
}

}
drawTree(5);