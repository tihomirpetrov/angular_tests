import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EventService} from '../../../core/event.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ListSlidoEvent} from '../../shared/models/list-slido-event';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['code', 'createdOn', 'expiresOn'];
  dataSource = new MatTableDataSource<ListSlidoEvent>();
  allEventsSubscription: Subscription;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.fetchAllEvents();
    this.allEventsSubscription = this.eventService.allEventsChanged.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.allEventsSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEvent(eventCode) {
    this.eventService.fetchEventByCode(eventCode);
  }
}
