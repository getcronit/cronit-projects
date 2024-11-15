// planeService.ts

interface Plane {
  id: string;
  model: string;
  manufacturer: string;
  capacity: number;
}

class PlaneService {
  private planes: Plane[] = [];

  addPlane(plane: Plane): void {
    this.planes.push(plane);
  }

  findPlaneById(id: string): Plane | undefined {
    return this.planes.find(plane => plane.id === id);
  }

  listPlanes(): Plane[] {
    return this.planes;
  }

  $updatePlane(id: string, updatedInfo: Partial<Plane>): void {
    const plane = this.findPlaneById(id);
    if (plane) {
      Object.assign(plane, updatedInfo);
    }
  }

  $removePlane(id: string): void {
    this.planes = this.planes.filter(plane => plane.id !== id);
  }
}

export { PlaneService, Plane };