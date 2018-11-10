import { Component, OnInit } from "@angular/core";
import { ClientsListService } from "../../services/clients-list.service";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"]
})
export class ClientListComponent implements OnInit {
  clientList: any;
  constructor(private clientService: ClientsListService) {}
  headers = ["Client Name", "Project Name", "Email", " skype id"];
  public currentName;
  ngOnInit() {
    this.clientService.getClientDetails().subscribe(list => {
      console.log(list);
      this.clientList = list;
    });
  }

  clientDocuments(name) {
    this.currentName = name;
    this.clientService.getClientDocuments(name).subscribe(documents => {
      console.log(documents);
    });
  }
}
