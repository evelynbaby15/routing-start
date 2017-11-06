import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // Note router.navigate 跟 routerLink 不同，routerLink 會按照在 app module 中定義的 route map 取得相對應的 path, 但是
    // navigate 則是可單傳一個參數，如果要找出相對的路徑對應基準需要再給第二個 relativeTo 參數物件
    // 但在這邊使用的話會錯，因為下面這行會形成 http://localhost:4200/servers/servers 的 URL
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
