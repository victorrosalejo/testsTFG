import * as d3 from "d3";


function BVH({
  data,
  xPartitions = 10,
  yPartitions = 10,
  polylines = true,
}) {
  
  function populateBVHPoints(data, BVH) {
    let xinc = BVH.xinc;
    let yinc = BVH.yinc;
    data.forEach(d => {
      let key = d[0];
      for (let point of d[1]) {
        let [x, y] = point;
        //Divide las coordenadas por el incremento para encontrar la particion
        let Iindex = Math.floor(x / xinc);
        let Jindex = Math.floor(y / yinc);
        let cell = BVH.BVH[Iindex][Jindex];

        //Si se encuentra un valor de key dentro de la particion
        // se agrega el punto a la lista de puntos de esa particion
        // Si no se encuentra, se crea una nueva lista de puntos
        // para ese key dentro de la particion

        if (cell.data.has(key)) {
          cell.data.get(key).push([x,y]);
        } else {
          cell.data.set(key,[x,y]);
        }
      }
    });
  }

 function makeBVH() {
    //Normaliza los datos para que tengan el formato correcto
    let keys = data.map((d) => d[0]);
    let allValues = data.map(d => d[1]).flat();
    //Encuentra los valores minimos y maximos de las coordenadas
    let extentX = d3.extent(allValues, d => d[0]);
    let extentY = d3.extent(allValues, d => d[1]);
    //Suma uno a los valores maximos para hacer bordes inclusivos
    let width = (extentX[1] - extentX[0]) + 1;
    let height = (extentY[1] - extentY[0]) + 1;
    //Determmina el incremento de las particiones
    let xinc = width / xPartitions;
    let yinc = height / yPartitions;
    let BVH = {
      width: width,
      height: height,
      xinc: xinc,
      yinc: yinc,
      offsetX: extentX[0],
      offsetY: extentY[0],
      keys: keys,
      BVH: [],
    };

    }
    return BVH;
  }
  
  export default BVH;