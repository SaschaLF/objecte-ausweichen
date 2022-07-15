basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    while(true){

        if(calliBot2.entfernung(C2Einheit.cm)<10){
            calliBot2.motor(C2Motor.rechts,C2Dir.vorwärts, 45)
            calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 30)
            basic.pause(525);
            calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen);

            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 30)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 45)
            basic.pause(1000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)

            calliBot2.motor(C2Motor.rechts,C2Dir.rückwärts, 45)
            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 30)
            basic.pause(525);
            calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen);

            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 30)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 45)
            calliBot2.warteLSensor(C2Sensor.links, C2SensorStatus.hell)

            calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 30)
            calliBot2.motor(C2Motor.rechts,C2Dir.vorwärts, 45)
            basic.pause(275);
        }

        if(calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)){
            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 30)
            basic.pause(10)
            calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen)
        }
        else if(calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)){
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 30)
            basic.pause(10)
            calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen)
        }
        else{
            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 30)
            calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 45)
            basic.pause(10)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        }
    }
})