
export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
}

export enum ServiceType {
  TRANSPORT = 'Acompañamiento a Cita Médica',
  HOME_CARE = 'Cuidado en Casa (Enfermería)',
  RECREATION = 'Acompañamiento Recreativo',
  RESORT_INFO = 'Información sobre Futuro Resort'
}
