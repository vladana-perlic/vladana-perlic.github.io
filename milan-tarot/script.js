const inputStyle = {};



class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: '',
      isActive: false };

    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: '',
        isActive: true });

    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value });

  }


  render() {
    const possibleAnswers = [
    'Gurnite prst u dupe sredom i petkom od 9 do 10 i gledajte u Snoop Doggy Dogga.',
    'Kažite "ćelavi globus", a vaš muž nek kaže "vozi autobus" i tako 10 puta.',
    'Na kući imate uroke. Enco Ferari, on baca to. I to kroz dimnjak. Izađite ispred i pljunite 5 puta. I kaži "Hakim, govno jedno, mamu li ti jebem" 7 puta.',
    'Umirete. Vidim da umirete. Zovite sad hitnu pomoć. Prijatno!',
    'Imate uroka i to dva komada. Pa zašto ste to dozvolili?',
    'Vičite "av, av, uroci, bežite od mene!" 7 puta.',
    'Jadranka vam pravi uroke, đubre jedno.',
    'Reći ćete 6 puta "Ja sam Tarzan, gospodar džungle".',
    'Uzmite 2 jaja i razbijte o glavu. Bravo! Sve ste probleme rešili razbijanjem ovih jaja.',
    'Pojedite kilo banana u četvrtak i počećete da radite. Ali tačno kilo, u gram da vam izmeri.',
    'Pružajte prvo jednu pa drugu šaku naprijed i vičite "haa-jaa!"',
    'Vidim ovde, na vas je bacio magiju jedan čovek. On se zove Fleš Gordon. Morate reći "Fleš Gordone, jebem li ti majku" 6 puta.',
    'Po tarotu, samo GTA igrica i Winning Eleven. Ovo Pro Evolution, to su sve gluposti, to nemojte da igrate, to je kontaminacija po tarotu. Ko igra Counter Strike na PC-u isto ide u pakao. Igre se igraju na konzoli po tarotu, a računar je za programiranje, nije za igrice.',
    'Samo vičite "nindža, nindža", a ja ću da vam šaljem energiju.',
    'Skakavca stavite u gaće i rešićete crnu magiju.',
    'To vam pravi jedan čovek. Trojku ima dužu i levu i desnu. I njegovo ime je Drakula, ima crni plašt. On vam to pravi. Kažite "Drakulo, idi od mene" 5 puta da ga oteramo.',
    'Gazda vas je prevario za pare. Uzmite kamen i udarite o glavu tom gazdi. Ima da da i platu ranije i ovu i buduću i da peva "juhuhuhu". Ko ne da radnicima platu, kamen u glavu.',
    'Uzmite dva DVD-a. U jedan DVD ubacite crtani "Kalimera", a u drugi "Brzi Gonzales" i istovremeno gledate oba crtana. Biće jako teško, ali morate da budete uporni.',
    'Zdravi ste, ali nije vam dobro.',
    'Vi bolujete od brontosaurusa. To je drugi virus koji se pojavio na svetu. Prvi je homo sapiens. Tražite po apotekama antibrontosaurus. To pijte 3 puta dnevno na svaka 2 sata i proći će vam.'];

    const answer = possibleAnswers[this.state.randomIndex];
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        value: this.state.userInput,
        onChange: this.handleChange,
        style: inputStyle }), /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { class: "glow", onClick: this.ask }, /*#__PURE__*/React.createElement("span", { class: "nav-last pull-right text" }, "Ka\u017Eite mi \u0161ta Vas mu\u010Di ")), /*#__PURE__*/
      React.createElement("br", null),
      this.state.isActive ? /*#__PURE__*/React.createElement("h1", null, "Mmmm odgovor mi se ukazao:") : null, /*#__PURE__*/
      React.createElement("div", { id: "box" }, " ", /*#__PURE__*/React.createElement("h2", null,
      answer), " ")));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MagicEightBall, null), document.getElementById('root'));