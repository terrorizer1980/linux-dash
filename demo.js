angular
  .module('linuxDashDemo', ['linuxDash', 'ngMockE2E'])
  .run(function($httpBackend) {

// signal to not use websockets for demo
$httpBackend.whenGET('/websocket').respond(false)

  /** System Status */
    $httpBackend.whenGET('server/?module=current_ram').respond(function () {
      return [200, {total: 512, used: 200, available: 312 }]
    })

    $httpBackend.whenGET('server/?module=ram_intensive_processes').respond(function () {
      return [200, [ { 'pid': 2782, 'user': 'user1', 'mem%': 2.2, 'rss': 232332, 'vsz': 1118240, 'cmd': 'nginx'}, { 'pid': 2623, 'user': 'user1', 'mem%': 2.0, 'rss': 209732, 'vsz': 1321800, 'cmd': 'nginx'}, { 'pid': 1558, 'user': 'user1', 'mem%': 1.3, 'rss': 140796, 'vsz': 1321400, 'cmd': 'gnome-software'}, { 'pid': 5026, 'user': 'user1', 'mem%': 1.2, 'rss': 126312, 'vsz': 875072, 'cmd': 'nginx'}, { 'pid': 5051, 'user': 'user1', 'mem%': 1.1, 'rss': 112776, 'vsz': 872512, 'cmd': 'nginx'}, { 'pid': 1477, 'user': 'user1', 'mem%': 1.0, 'rss': 108248, 'vsz': 1471548, 'cmd': 'compiz'}, { 'pid': 2997, 'user': 'user1', 'mem%': 1.0, 'rss': 107208, 'vsz': 869076, 'cmd': 'nginx'}, { 'pid': 2298, 'user': 'root', 'mem%': 1.0, 'rss': 101356, 'vsz': 286772, 'cmd': 'aptd'}, { 'pid': 2700, 'user': 'user1', 'mem%': 0.9, 'rss': 95784, 'vsz': 460272, 'cmd': 'nginx'}, { 'pid': 2799, 'user': 'user1', 'mem%': 0.8, 'rss': 83940, 'vsz': 778512, 'cmd': 'nginx'}, { 'pid': 4248, 'user': 'user1', 'mem%': 0.8, 'rss': 82276, 'vsz': 1059420, 'cmd': 'redis'}, { 'pid': 1095, 'user': 'root', 'mem%': 0.7, 'rss': 78424, 'vsz': 457156, 'cmd': 'Xorg'}, { 'pid': 2810, 'user': 'user1', 'mem%': 0.7, 'rss': 72884, 'vsz': 750856, 'cmd': 'nginx'}, { 'pid': 2809, 'user': 'user1', 'mem%': 0.7, 'rss': 72872, 'vsz': 752908, 'cmd': 'nginx'} ]]
    })

    $httpBackend.whenGET('server/?module=cpu_intensive_processes').respond(function () {
      return [200, [ { 'pid': 5026, 'user': 'user1', 'cpu%': 25.5, 'rss': 137944, 'vsz': 907236, 'cmd': 'nginx'}, { 'pid': 2623, 'user': 'user1', 'cpu%': 9.5, 'rss': 229016, 'vsz': 1327948, 'cmd': 'nginx'}, { 'pid': 2700, 'user': 'user1', 'cpu%': 8.8, 'rss': 106324, 'vsz': 474796, 'cmd': 'nginx'}, { 'pid': 4248, 'user': 'user1', 'cpu%': 8.8, 'rss': 96848, 'vsz': 1151460, 'cmd': 'sublime_text'}, { 'pid': 1477, 'user': 'user1', 'cpu%': 8.6, 'rss': 111252, 'vsz': 1476524, 'cmd': 'compiz'}, { 'pid': 1571, 'user': 'user1', 'cpu%': 7.7, 'rss': 62984, 'vsz': 551884, 'cmd': 'orca'}, { 'pid': 1095, 'user': 'root', 'cpu%': 6.2, 'rss': 86048, 'vsz': 457112, 'cmd': 'Xorg'}, { 'pid': 1535, 'user': 'user1', 'cpu%': 3.9, 'rss': 17152, 'vsz': 574624, 'cmd': 'pulseaudio'}, { 'pid': 5051, 'user': 'user1', 'cpu%': 1.6, 'rss': 131828, 'vsz': 888712, 'cmd': 'nginx'}, { 'pid': 2890, 'user': 'user1', 'cpu%': 1.1, 'rss': 52968, 'vsz': 657408, 'cmd': 'unity-panel-ser'}, { 'pid': 2782, 'user': 'user1', 'cpu%': 1.0, 'rss': 226536, 'vsz': 1110556, 'cmd': 'nginx'}, { 'pid': 1438, 'user': 'user1', 'cpu%': 0.9, 'rss': 45840, 'vsz': 660352, 'cmd': 'hud-service'}, { 'pid': 1631, 'user': 'user1', 'cpu%': 0.9, 'rss': 26208, 'vsz': 514684, 'cmd': 'indicator-multi'}, { 'pid': 1804, 'user': 'user1', 'cpu%': 0.9, 'rss': 9752, 'vsz': 523936, 'cmd': 'sd_espeak'} ]]
    })

    $httpBackend.whenGET('server/?module=disk_partitions').respond(function () {
      return [200, [ {'file_system': 'udev', 'size': '4.9G', 'used': '0', 'avail': '4.9G', 'used%': '0%', 'mounted': '/dev'}, {'file_system': '/dev/sda1', 'size': '449G', 'used': '224.5G', 'avail': '224.5G', 'used%': '50%', 'mounted': '/'}, {'file_system': 'tmpfs', 'size': '5.0M', 'used': '4.0K', 'avail': '5.0M', 'used%': '1%', 'mounted': '/run/lock'} ]]
    })

    $httpBackend.whenGET('server/?module=cpu_temp').respond(function () {
      return [200, [ ]]
    })

    $httpBackend.whenGET('server/?module=cpu_temp').respond(function () {
      return [200, [ ]]
    })

    $httpBackend.whenGET('server/?module=cpu_utilization').respond(function () {
      return [200, 25]
    })

    $httpBackend.whenGET('server/?module=load_avg').respond(function () {
      return [200, { '1_min_avg': 40, '5_min_avg': 22, '15_min_avg': 10}]
    })

    $httpBackend.whenGET('server/?module=docker_processes').respond(function () {
      return [200, []]
    })

    $httpBackend.whenGET('server/?module=swap').respond(function () {
      return [200, [ { 'filename': '/dev/sda5', 'type': 'partition', 'size': '10364924', 'used': '0', 'priority': '-1'} ]]
    })

  /** Basic Info **/
    $httpBackend.whenGET('server/?module=cron_history').respond(function () {
      return [200, []]
    })

    $httpBackend.whenGET('server/?module=io_stats').respond(function () {
      return [200, [ { 'device': 'sda', 'reads': '75406', 'writes': '119939', 'in_prog.': '0', 'time': '816604'}, { 'device': 'sda1', 'reads': '74587', 'writes': '81983', 'in_prog.': '0', 'time': '796964'}, { 'device': 'sda2', 'reads': '6', 'writes': '0', 'in_prog.': '0', 'time': '304'}, { 'device': 'sda5', 'reads': '73', 'writes': '0', 'in_prog.': '0', 'time': '3344'}, { 'device': 'sdb', 'reads': '276', 'writes': '0', 'in_prog.': '0', 'time': '72'}, { 'device': 'sdb1', 'reads': '234', 'writes': '0', 'in_prog.': '0', 'time': '64'} ]]
    })

    $httpBackend.whenGET('server/?module=cpu_info').respond(function () {
      return [200, [ { 'device': 'sda', 'reads': '75406', 'writes': '119939', 'in_prog.': '0', 'time': '816604'}, { 'device': 'sda1', 'reads': '74587', 'writes': '81983', 'in_prog.': '0', 'time': '796964'}, { 'device': 'sda2', 'reads': '6', 'writes': '0', 'in_prog.': '0', 'time': '304'}, { 'device': 'sda5', 'reads': '73', 'writes': '0', 'in_prog.': '0', 'time': '3344'}, { 'device': 'sdb', 'reads': '276', 'writes': '0', 'in_prog.': '0', 'time': '72'}, { 'device': 'sdb1', 'reads': '234', 'writes': '0', 'in_prog.': '0', 'time': '64'} ]]
    })

    $httpBackend.whenGET('server/?module=scheduled_crons').respond(function () {
      return [200, [ ]]
    })

    $httpBackend.whenGET('server/?module=memory_info').respond(function () {
      return [200, {'MemTotal': '10120412 kB','MemFree': '7257156 kB','MemAvailable': '8173888 kB','Buffers': '   257824 kB','Cached': '   1175940 kB','SwapCached': ' 0 kB','Active': '   1815224 kB','Inactive': '  783844 kB','Active(anon)': '1174832 kB','Inactive(anon)': '   334816 kB','Active(file)': ' 640392 kB','Inactive(file)': '   449028 kB','Unevictable': '  384 kB','Mlocked': '  384 kB','SwapTotal': '  10364924 kB','SwapFree': '10364924 kB','Dirty': ' 156 kB','Writeback': '  0 kB','AnonPages': '1165736 kB','Mapped': '420416 kB','Shmem': ' 344344 kB','Slab': '  143556 kB','SReclaimable': ' 109592 kB','SUnreclaim': ' 33964 kB','KernelStack': ' 8560 kB','PageTables': ' 32700 kB','NFS_Unstable': '   0 kB','Bounce': '  0 kB','WritebackTmp': '   0 kB','CommitLimit': '15425128 kB','Committed_AS': '5073516 kB','VmallocTotal': '   34359738367 kB','VmallocUsed': '0 kB','VmallocChunk': '   0 kB','HardwareCorrupted': ' 0 kB','AnonHugePages': '352256 kB','CmaTotal': '0 kB','CmaFree': ' 0 kB','HugePages_Total': '0','HugePages_Free': ' 0','HugePages_Rsvd': ' 0','HugePages_Surp': ' 0','Hugepagesize': '2048 kB','DirectMap4k': '  130800 kB','DirectMap2M': ' 4993024 kB','DirectMap1G': ' 6291456 kB'}]
    })

    $httpBackend.whenGET('server/?module=general_info').respond(function () {
      return [200, { 'OS': 'Ubuntu 16.04.2 LTS 4.4.0-77-generic', 'Hostname': 'webserver-prod-983742', 'Uptime': '5 hours and 32 minutes and 27 seconds ', 'Server Time': 'Sat May 13 00:11:39 EST 2017' }]
    })

    $httpBackend.whenGET('server/?module=download_transfer_rate').respond(function () {
      return [200, { "lo": 0, "wlp3s0": 0 }]
    })

    $httpBackend.whenGET('server/?module=upload_transfer_rate').respond(function () {
      return [200, { "lo": 6, "wlp3s0": 3 }]
    })

    $httpBackend.whenGET('server/?module=bandwidth').respond(function () {
      return [200, [{ 'interface': 'wlp3s0:', 'tx': 226076758, 'rx': 9037438 },{ 'interface': 'lo:', 'tx': 12016995, 'rx': 12016995 }]]
    })

    $httpBackend.whenGET('server/?module=ping').respond(function () {
      return [200, [{'host': 'google.com', 'ping': 23.234 },{'host': 'yahoo.com', 'ping': 67.412 },{'host': 'twitter.com', 'ping': 34.560 }]]
    })

    $httpBackend.whenGET('server/?module=ip_addresses').respond(function () {
      return [200, [{ 'interface': 'external', 'ip': '70.113.122.2' } ]]
    })

    $httpBackend.whenGET('server/?module=network_connections').respond(function () {
      return [200, [{ 'connections': 1, 'address': '127.0.0.1:48562' }
        ,{ 'connections': 1, 'address': '127.0.0.1:48564' }
        ,{ 'connections': 1, 'address': '127.0.0.1:48708' }
        ,{ 'connections': 3, 'address': '127.0.0.1:8080' }
        ,{ 'connections': 1, 'address': '192.241.178.140:443' }
        ,{ 'connections': 2, 'address': '2657:f9b0:9000:802::443' }
        ,{ 'connections': 1, 'address': '2657:f9b0:0000:80c::443' }
        ,{ 'connections': 1, 'address': '2657:f9b0:0000:80f:::80' }
        ,{ 'connections': 2, 'address': '2657:f9b0:0000:816:::80' }
        ,{ 'connections': 1, 'address': '2657:f9b0:0003:c09:5228' }]]
    })

    $httpBackend.whenGET('server/?module=arp_cache').respond(function () {
      return [200, [ { 'addr': '192.168.0.1', 'hw_type': 'ether', 'hw_addr.': '15:db:45:eb:4d:6a', 'mask': 'wlp3s0' } ]]
    })

  })