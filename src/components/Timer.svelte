<script lang="ts">
    // time till 2023-12-1
    let time_string = "be patient"
    function getTimeUntil(dateString: string) {
	const targetDate = new Date(dateString).getTime();
	const now = new Date().getTime();
	const timeUntil = targetDate - now;
    
	const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);
	if (timeUntil < 0){
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
	return { days, hours, minutes, seconds };
    }

    setInterval(() => {
        const time = getTimeUntil('2023-11-7');
        time_string = `${time.days}:${time.hours}:${time.minutes}:${time.seconds}`;
    }, 1000);
</script>
<h2 class="text-7xl"><span id="time">{time_string}</span></h2>