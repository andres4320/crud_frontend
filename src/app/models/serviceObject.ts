export class ServiceObject {
    constructor(public entity?: string, public id?: number, public data?: any, public attributes?: any) {
      this.entity = entity;
      this.id = id;
      this.data = data;
      this.attributes = attributes;
      this.status = false;
      this.message = ''; 
    }
  
    status: boolean;
    message: string;
}