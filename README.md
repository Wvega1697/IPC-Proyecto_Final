# Cotizador Automático para Empresa de Seguros TK-U
Este programa es una solución para la empresa de seguros TK-U, que busca automatizar el proceso de cotización de seguros para sus posibles clientes/asegurados. La versión actual del programa considera los siguientes requerimientos:

1. La persona a asegurar tiene que ser mayor de edad, por lo cual no se consideran los casos en los cuales esto no sea verdad.
2. Se tiene un plan base, al cual se le pueden aplicar recargos extra dependiendo de las condiciones del asegurado. Las condiciones que causan recargos son las siguientes:
- Dependiendo de la edad del asegurado
- Dependiendo de si el asegurado está casado o no y
dependiendo también de la edad del esposo/a del asegurado
- Dependiendo de la cantidad de hijos o hijas que tenga el asegurado.
3. Para el primer y el segundo punto, son recargos basados en los rangos de edades:
- Si tienen de 18 a 24 años, se les hará un recargo del 10% del precio base.
- Si tienen de 25 a 49 años, se les hará un recargo del 20% del precio base.
- Si tienen 50 años o más, se les hará un recargo del 30% del precio base.


## Cómo utilizar el programa
Para utilizar el cotizador automático, debe ejecutar el archivo cotizador.py. El programa le pedirá que ingrese los siguientes datos:

- Edad del asegurado
- Estado civil del asegurado (soltero/casado)
- Edad del esposo/a del asegurado (si está casado)
- Cantidad de hijos del asegurado

El programa verificará que la edad del asegurado sea mayor o igual a 18 años, de lo contrario se mostrará un mensaje de error y se pedirá que ingrese una edad válida. Luego, el programa calculará el precio base de la cotización y aplicará los recargos correspondientes según la edad, estado civil y cantidad de hijos del asegurado. Finalmente, se mostrará el precio total de la cotización.

## Consideraciones
Es importante tener en cuenta que este programa actualmente solo considera los requerimientos mencionados anteriormente. Si la empresa de seguros TK-U decide agregar nuevos requerimientos o condiciones para las cotizaciones, será necesario actualizar el programa para incluirlos.

Además, el programa actualmente solo está diseñado para realizar una cotización por vez. Si la empresa desea generar múltiples cotizaciones a la vez, sería necesario agregar una funcionalidad para manejar una lista de clientes/asegurados y generar cotizaciones para cada uno de ellos.

## Mejoras futuras
En futuras versiones del programa, se podrían considerar las siguientes mejoras:

- Agregar soporte para diferentes planes de seguro, con diferentes precios base y recargos.
- Agregar soporte para diferentes tipos de cobertura, como seguro de vida, seguro de hogar, seguro de auto, entre otros.
- Implementar un sistema de autenticación para los agentes de la empresa de seguros, para garantizar la privacidad de la información de los clientes/asegurados.
- Integrar el cotizador automático con el sistema de gestión de clientes/asegurados de la empresa de seguros, para automatizar aún más el proceso de cotización y gestión de clientes.