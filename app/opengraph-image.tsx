import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MO Vida — Salud en cada botella";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F6F0E2",
          color: "#163326",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            borderRadius: 460,
            right: -80,
            top: -90,
            background: "#D9E7AA",
            opacity: 0.75,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: 360,
            right: 110,
            bottom: -180,
            background: "#EFD78D",
            opacity: 0.55,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 2, width: "70%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 92,
                height: 92,
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#1F5B3A",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              MO
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: "#1F5B3A" }}>MO Vida</div>
              <div style={{ fontSize: 16, letterSpacing: 4, textTransform: "uppercase", color: "#769B55" }}>
                Santo Domingo
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
              Salud en cada botella.
            </div>
            <div style={{ fontSize: 25, lineHeight: 1.4, color: "#496454" }}>
              Jugos naturales · Protein shakes · Shots · Combos · Delivery
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, fontSize: 18, fontWeight: 700, color: "#1F5B3A" }}>
            <span>WhatsApp 829-682-6461</span>
            <span>•</span>
            <span>@movidasdq</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 110,
            top: 105,
            width: 150,
            height: 405,
            borderRadius: 55,
            background: "linear-gradient(180deg,#9AC65D,#476F38)",
            boxShadow: "0 28px 60px rgba(31,91,58,.20)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 145,
            top: 65,
            width: 80,
            height: 62,
            borderRadius: 18,
            background: "#20231F",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 130,
            top: 265,
            width: 110,
            height: 110,
            borderRadius: 22,
            background: "#F8F3E7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4D823D",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          MO Vida
        </div>
      </div>
    ),
    size,
  );
}
