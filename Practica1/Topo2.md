## Topologia 2
#### Conectar Servidor Web Auxiliar Router 0
    enable
    configure terminal
    interf fast 0/0
    no shutdown
    ip add 192.168.3.1 255.255.255.224
    end

#### Conectar Servidor Web Profesor Router 1
    enable
    configure terminal
    interf g 0/0
    no shutdown
    ip add 192.168.2.1 255.255.255.224
    end

#### Conectar pc administracion Router 3
    enable
    configure terminal
    interf fast 0/0
    no shutdown
    exit
    interface fast 0/0.45
    encapsulation dot1q 45
    ip add 192.168.4.33 255.255.255.224
    end

### Configurar switch 0
#### Crear vlan Administracion
    enable
    configure terminal
    vlan 45
    name Administracion
    end
    copy run start

#### Configurar puertos
    enable
    configure terminal
    interface fast 0/2
    no shutdown
    switchport mode access
    switchport access vlan 45
    exit
    interface fast 0/1
    no shutdown
    switchport mode trunk
    end
    copy run start


### Ruteo EIGRP
#### Router 0

    enable
    configure terminal
    interface serial 2/0
    no shutdown
    ip add 192.16.3.10 255.255.255.0
    exit
    router eigrp 100
    net 192.16.3.0 0.0.0.255
    net 192.16.1.0 0.0.0.255
    net 192.168.3.0 0.0.0.31

#### Router 3
    enable
    configure terminal
    interface serial 2/0
    no shutdown
    ip add 192.16.3.13 255.255.255.0
    exit
    router eigrp 100
    net 192.16.3.0 0.0.0.255
    net 192.16.2.0 0.0.0.255
    net 192.168.4.0 0.0.0.31


### Ruteo OSPF
#### Router 0

    enable
    configure terminal
    interface serial 3/0
    no shutdown
    ip add 192.16.1.10 255.255.255.0
    exit
    router ospf 10
    net 192.16.3.0 0.0.0.255 area 0
    net 192.16.1.0 0.0.0.255 area 0
    net 192.168.3.0 0.0.0.31 area 0

#### Router 1
    enable
    configure terminal
    interface serial 0/1/0
    no shutdown
    ip add 192.16.1.11 255.255.255.0
    exit
    router ospf 10
    net 192.16.1.0 0.0.0.255 area 0
    net 192.16.2.0 0.0.0.255 area 0
    net 192.168.2.0 0.0.0.31 area 0
    

### Ruteo RIP
#### Router 1

    enable
    configure terminal
    interface serial 0/1/1
    no shutdown
    ip add 192.16.2.11 255.255.255.0
    exit
    router rip
    version 2
    net 192.168.2.0
    net 192.16.2.0 
    net 192.16.1.0
    end
    copy run start

#### Router 3
    enable
    configure terminal
    interface serial 3/0
    no shutdown
    ip add 192.16.2.13 255.255.255.0
    exit
    router rip
    version 2
    net 192.168.4.0
    net 192.16.2.0 
    net 192.16.3.0
    end
    copy run start



### Conectar 2 Topologias
#### Router 1 Topologia 1
    configure terminal
    interface serial 3/0
    no shutdown
    ip add 192.16.4.1 255.255.255.0
    exit
    router eigrp 5
    net 192.168.44.0 0.0.0.31
    net 10.0.0.0 0.255.255.255
    net 192.16.4.0 0.0.0.255
    end
    copy run start


#### Router 0 Topologia 2
    configure terminal
    interface serial 6/0
    no shutdown
    ip add 192.16.4.2 255.255.255.0
    exit
    router eigrp 5
    net 192.16.4.0 0.0.0.255
    net 192.16.1.0 0.0.0.255
    net 192.16.2.0 0.0.0.255
    net 192.168.3.0 0.0.0.255
    end
    copy run start


    

#### Redistribuir router 1 topologia 1
    config t
    route eigrp 5
    redistribute static

#### Redistribuir router 0 topologia 2
    config t
    route eigrp 100
    redistribute eigrp 5
    exit
    route ospf 10
    redistribute static subnets
    redistribute eigrp 5
    end

    config t
    route eigrp 5
    redistribute eigrp 100
    end

    config t
    route eigrp 5
    redistribute ospf 10
    end
    
