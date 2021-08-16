VLANS

ESTUDIANTES - 15

## Equipos Topologia 1


### Configuracion de las computadoras

| Equipo      | IP |MASCARA SUBRED| VLAN | GATEWAY |
| ----------- | ----------- | ----------- | ----------- | -----------|
| PC-profesor      | 192.168.2.40       | 255.255.255.224 | 25 | 192.168.2.33|
| PC-auxiliar      | 192.168.3.34       | 255.255.255.224 | 35 | 192.168.3.33|
| PC-Estudiante      | 192.168.1.50       | 255.255.255.224 | 15 | 192.168.1.33|
| Servidor-WebEstudiante| 192.168.11.2|255.255.255.224|15|192.168.11.1|
| Servidor-WebAdmin| 192.168.44.2|255.255.255.224|45|192.168.44.1|
| PC-registro|192.168.7.30|255.255.255.0|105|192.168.7.1|
| PC-registro2|192.168.7.10|255.255.255.0|105|192.168.7.1|
| PC-registro3|192.168.7.100|255.255.255.0|105|192.168.7.1|


### Configurar vlans 
#### Crear vlans switch 1
    configure terminal
    vlan 15
    name Estudiantes
    exit
    vlan 25
    name Auxiliares
    eixt
    vlan 35
    name Profesores
    exit
    vlan 105
    name Registro
    exit
    vlan 999
    name Blackhole
    exit
    vlan 99
    name Native
    end

#### Crear vlans switch 3
    configure terminal
    vlan 105
    name Registro
    exit
    vlan 999
    name Blackhole
    exit
    vlan 99
    name Native
    end

### Configurar vtp 
#### Configurar vtp server switch 1
    configure terminal
    vtp domain Grupo5
    vtp password Grupo5
    vtp mode server
    end
    copy run start


#### Configurar vtp server switch 1 y switch 2
    configure terminal
    vtp mode client
    vtp domain Grupo5
    vtp password Grupo5
    end
    copy run start

#### Configurar vtp transparent switch 3
    configure terminal
    vtp mode transparent
    vtp domain Grupo5
    vtp password Grupo5
    end
    copy run start

### Configurar puertos
#### Configurar switch 1 
    configure terminal
    interface range fa0/10,fa0/12,fa0/1
    no shutdown
    switchport mode trunk
    switchport trunk native vlan 99
    exit
    interface range fastEthernet 0/2 - 9, fastEthernet 0/13 -24
    shutdown
    switchport mode access 
    switchport access vlan 999
    end

#### Configurar switch 2 
    configure terminal
    interface range fa0/10,fa0/11
    no shutdown
    switchport mode trunk
    switchport trunk native vlan 99
    exit
    interface  fa0/1
    no shutdown
    switchport mode access
    switchport access vlan 25
    exit
    interface  fa0/2
    no shutdown
    switchport mode access
    switchport access vlan 35
    exit
    interface range fastEthernet 0/3 - 9, fastEthernet 0/12 -24
    shutdown
    switchport mode access 
    switchport access vlan 999
    end

#### Configurar switch 0 
    configure terminal
    interface range fa0/11,fa0/12,fa0/13
    no shutdown
    switchport mode trunk
    switchport trunk native vlan 99
    exit
    interface fa0/1
    no shutdown
    switchport mode access
    switchport access  vlan 15
    exit
    interface range fastEthernet 0/2 - 10, fastEthernet 0/14 -24
    shutdown
    switchport mode access 
    switchport access vlan 999
    end

#### Configurar switch 3 
    configure terminal
    interface fa0/13
    no shutdown
    switchport mode trunk
    switchport trunk native vlan 99
    exit
    interface range fa0/1,fa0/2,fa0/3
    no shutdown
    switchport mode access
    switchport access  vlan 105
    exit
    interface range fastEthernet 0/4 - 12, fastEthernet 0/14 -24
    shutdown
    switchport mode access 
    switchport access vlan 999
    end


#### Configurar Intervlan Router0 fast1/0

    configure terminal
    interface fast 1/0
    no shutdown
    exit
    interface fast 1/0.15
    encapsulation dot1q 15
    ip add 192.168.1.33 255.255.255.224
    no shutdown
    exit
    interface fast 1/0.25
    encapsulation dot1q 25
    ip add 192.168.2.33 255.255.255.224
    no shutdown
    exit
    interface fast 1/0.35
    encapsulation dot1q 35
    ip add 192.168.3.33 255.255.255.224
    no shutdown
    exit
    interface fast 1/0.105
    encapsulation dot1q 105
    ip add 192.168.7.1 255.255.255.0
    no shutdown
    end
    copy run start


#### Configurar Servidor Router0
    
    configure terminal
    interface fast 0/0
    no shutdown
    ip add 192.168.11.1 255.255.255.224
    end

#### Configurar Servidor Router1
    
    configure terminal
    interface fast 0/0
    no shutdown
    ip add 192.168.44.1 255.255.255.224
    end

#### Configurar Serial Router 0
    configure terminal
    interface serial 2/0
    no shutdown
    ip add 10.0.0.10 255.0.0.0
    exit


#### Configurar Serial Router 1
    configure terminal
    interface serial 2/0
    no shutdown
    ip add 10.0.0.11 255.0.0.0
    exit


#### Configurar Rutas Router 0
    config terminal
    ip route 192.168.44.0 255.255.255.224 10.0.0.11
    ip route 192.16.1.0 255.255.255.0 10.0.0.11
    ip route 192.16.2.0 255.255.255.0 10.0.0.11
    ip route 192.16.3.0 255.255.255.0 10.0.0.11
    ip route 192.16.4.0 255.255.255.0 10.0.0.11
    ip route 192.168.3.0 255.255.255.224 10.0.0.11
    ip route 192.168.4.32 255.255.255.224 10.0.0.11
    ip route 192.168.2.0 255.255.255.224 10.0.0.11
    end

#### Configurar Rutas Router 1
    config terminal
    ip route 192.168.1.32 255.255.255.224 10.0.0.10
    ip route 192.168.2.32 255.255.255.224 10.0.0.10
    ip route 192.168.3.32 255.255.255.224 10.0.0.10
    ip route 192.168.7.0 255.255.255.0 10.0.0.10
    ip route 192.168.11.0 255.255.255.224 10.0.0.10
    end


ip route 0.0.0.0 0.0.0.0 192.16.4.2
ip route 0.0.0.0 0.0.0.0 192.16.1.10


