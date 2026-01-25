export default function Education() {
  return (
    <>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        <div className="space-y-4 mx-auto max-w-6xl">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              삼성청년SW,AI아카데미 (Samsung Software AI Academy for Youth)
            </h3>
            <h4 className="text-sm text-muted-foreground">
              13기, 비전공(파이썬)
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              2025.01 - 2025.12
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">동의대학교</h3>
            <h4 className="text-sm text-muted-foreground">산업ICT기술공학과</h4>
            <p className="text-xs text-muted-foreground mt-1">
              2019.03 - 2025.02
            </p>
            <p className="mt-2">
              평점: 3.99 / 4.5 <br /> 전공 평점: 4.25 / 4.5
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
