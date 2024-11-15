export class PilotService {
    private pilots: { id: number, name: string, experience: number }[] = [];

    addPilot(id: number, name: string, experience: number): void {
        this.pilots.push({ id, name, experience });
    }

    findPilotById(id: number): { id: number, name: string, experience: number } | undefined {
        return this.pilots.find(pilot => pilot.id === id);
    }

    listPilots(): { id: number, name: string, experience: number }[] {
        return this.pilots;
    }

    $updatePilotExperience(id: number, experience: number): boolean {
        const pilot = this.findPilotById(id);
        if (pilot) {
            pilot.experience = experience;
            return true;
        }
        return false;
    }

    $removePilot(id: number): boolean {
        const index = this.pilots.findIndex(pilot => pilot.id === id);
        if (index !== -1) {
            this.pilots.splice(index, 1);
            return true;
        }
        return false;
    }
}