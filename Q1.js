var mat1 = [[2,-1], [2,0]]
var mat2 = [[2,3], [-2, 1]]
var mat3 = [[0,0], [0,0]]

for (var i=0; i<2; i++){
    for (var j=0; j<2; j++){
        for(var k=0; k<2; k++)
        mat3[i][j] += mat1[i][k] * mat2[k][j]
        console.log(mat3[i][j])
    }
}
