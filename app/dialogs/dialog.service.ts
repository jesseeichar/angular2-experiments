import {Injectable} from 'angular2/core';

@Injectable()
export class DialogService {
  public dialogHeader:string;
  public dialogMessage:string;
  public dialogConfirmation: () => void;
  public dialogRejection: () => void;

  confirm(titlebar: string, message: string) {
    this.dialogHeader = titlebar;
    this.dialogMessage = message;

    return new Promise<boolean>((resolve, reject) =>{
      this.dialogConfirmation = () => resolve(true);
      this.dialogRejection = () => resolve(false);

       $('#confirm-dialog').openModal();
    });
  };
}