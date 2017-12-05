const WTF ={
    _getShaderSource:function(id){
        return document.getElementById(id).text
    },
    createShader:function(gl,type,id){
        const shader = gl.createShader(type); //创建着色器对象
        gl.shaderSource(shader, this._getShaderSource(id)); //装填数据源
        gl.compileShader(shader); //编译生成着色器
        console.log(gl.getShaderInfoLog(shader));
        return shader;
    },
    createProgram:function(gl, vshader, fshader){
        const program = gl.createProgram();
        gl.attachShader(program, vshader);
        gl.attachShader(program, fshader);
        gl.linkProgram(program);
        console.log(gl.getProgramInfoLog(program));
        return program;

    }
}